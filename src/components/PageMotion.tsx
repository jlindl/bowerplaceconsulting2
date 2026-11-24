"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, EASE } from "@/lib/gsap";

/**
 * Drives every scroll and load animation on a page from data attributes:
 *  data-anim="lines"  masked line rise (children .line > .line-inner)
 *  data-anim="fade"   soft rise + fade (non-interactive content only)
 *  data-anim="img"    clip-path unveil with a slight scale settle (on .img-frame)
 *  data-anim="rule"   hairline draws left to right
 *  data-anim="stagger" children rise in sequence
 *  data-anim="rise"   rise only, stays visible (safe for calls to action)
 *  data-hero          plays on load rather than on scroll
 * Calls to action are never faded from invisible.
 */
export default function PageMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = scope.current!;
        const trig = (el: Element) =>
          el.closest("[data-hero]") ? undefined : { trigger: el, start: "top 86%", once: true };

        root.querySelectorAll<HTMLElement>('[data-anim="lines"]').forEach((el) => {
          gsap.from(el.querySelectorAll(".line-inner"), {
            yPercent: 110,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.08,
            delay: el.closest("[data-hero]") ? 0.15 : 0,
            scrollTrigger: trig(el),
          });
        });

        root.querySelectorAll<HTMLElement>('[data-anim="fade"]').forEach((el) => {
          gsap.from(el, {
            y: 24,
            autoAlpha: 0,
            duration: 1,
            ease: EASE,
            delay: el.closest("[data-hero]") ? 0.5 : 0,
            scrollTrigger: trig(el),
          });
        });

        root.querySelectorAll<HTMLElement>('[data-anim="stagger"]').forEach((el) => {
          gsap.from(el.children, {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            ease: EASE,
            stagger: 0.08,
            scrollTrigger: trig(el),
          });
        });

        root.querySelectorAll<HTMLElement>('[data-anim="rise"]').forEach((el) => {
          gsap.from(el, {
            y: 32,
            duration: 1,
            ease: EASE,
            delay: el.closest("[data-hero]") ? 0.6 : 0,
            scrollTrigger: trig(el),
          });
        });

        root.querySelectorAll<HTMLElement>('[data-anim="img"]').forEach((el) => {
          const img = el.querySelector("img");
          const tl = gsap.timeline({ scrollTrigger: trig(el), delay: el.closest("[data-hero]") ? 0.25 : 0 });
          tl.fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "expo.inOut" }
          );
          if (img) tl.from(img, { scale: 1.14, duration: 1.8, ease: "expo.out" }, 0.1);
        });

        root.querySelectorAll<HTMLElement>('[data-anim="rule"]').forEach((el) => {
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: "0 50%",
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: trig(el),
          });
        });

        ScrollTrigger.refresh();
      });
      return () => mm.revert();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
