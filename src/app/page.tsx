import Button from "@/components/modules/home/button";
import GlitchSection from "@/components/modules/home/glitch-section";
import Image from "next/image";

import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <main className="flex flex-col h-screen">
      <Image
        src="/wallpaper-new.png"
        alt="hero_wallpaper"
        width={1920}
        height={1080}
        className="absolute h-screen opacity-10 -z-10"
      />
      <GlitchSection
        text="CyberTankz"
        description=" It's time to embark on a journey across the battlefield where the
        past meets the present. The game will take you from 2020 to 2024 and
        offer you an unforgettable experience. With over 31 ranks to achieve,
        each map offers familiar yet new battles and challenges. Plenty of
        special quests and unique rewards await you to make you stand out on the
        battlefield. The future of CyberTankz will be developed based on your
        feedback, but rest assured that both new and old fan-favourite features
        are in store. Join us as we embark on a rewritten past with CyberTankz!"
      />

      <div id="mainCoantiner">
  <!--dust particel-->
  <div class="margin-body">

    <div>
      <div class="starsec"></div>
      <div class="starthird"></div>
      <div class="starfourth"></div>
      <div class="starfifth"></div>
    </div>
    <!--Dust particle end--->

    <div class="pricing-column-wrapper">
      <div class="pricing-column">
        <div class="pricing-price-row">
          <div class="pricing-price-wrapper">
            <div class="pricing-price">
              <div class="pricing-cost">Free</div>
              <div class="time">Price</div>
            </div>
          </div>
        </div>
        <div class="pricing-row-title">
          <div class="pricing_row_title">Free Nickname</div>
        </div>
        <figure class="pricing-row">Free nickname</figure>
        <figure class="pricing-row"><span>Guaranteed in-game name.</span></figure>
        <figure class="pricing-row"><span>3-20 letters/numbers.</span></figure>
        <figure class="pricing-row"><span>Access to game after the game's release.</span></figure>
        <div class="pricing-footer">
          <div class="gem-button-container gem-button-position-center"><a href="#" class="gem-button gem-green">order now</a></div>
        </div>
      </div>
    </div>

    <div class="pricing-column-wrapper">
      <div class="pricing-column">
        <div class="pricing-price-row">
          <div class="pricing-price-wrapper">
            <div class="pricing-price">
              <div class="pricing-cost">$15</div>
              <div class="time">Price</div>
            </div>
          </div>
        </div>
        <div class="pricing-row-title">
          <div class="pricing_row_title">Premium Nickname</div>
        </div>
        <figure class="pricing-row">Unique two-letter/number name.</figure>
        <figure class="pricing-row"><span>Guaranteed in-game name with 2 letters.</span></figure>
        <figure class="pricing-row"><span style="color: #5f727f;">Early access to the game (July 2024).</span></figure>
        <figure class="pricing-row">Special Paint "Premium Nick."</figure>
        <div class="pricing-footer">
          <div class="gem-button-container gem-button-position-center">
            <a class="gem-button gem-orange">order now</a>
          </div>
        </div>
      </div>
    </div>

    <div class="pricing-column-wrapper">
      <div class="pricing-column">
        <div class="pricing-price-row">
          <div class="pricing-price-wrapper">
            <div class="pricing-price">
              <div style=" " class="pricing-cost">30$</div>
              <div class="time" style="display:inline-block;">Price</div>
            </div>
          </div>
        </div>
        <div class="pricing-row-title">
          <div class="pricing_row_title">Elite Nickname</div>
        </div>
        <figure class="pricing-row">Unique one-letter/number name.</figure>
        <figure class="pricing-row"><span style="color: #5f727f;">Guaranteed in-game name with 1 letter.</span></figure>
        <figure class="pricing-row"><span style="color: #5f727f;">Early access to the game (July 2024).</span></figure>
        <figure class="pricing-row">Special Paint "Elite Nickname."</figure>
        <div class="pricing-footer">
          <div class="gem-button-container gem-button-position-center"><a class="gem-button gem-yellow">order now</a></div>
        </div>
      </div>
    </div>

  </div>
</div>


      </main>
    </React.Fragment>
  );
