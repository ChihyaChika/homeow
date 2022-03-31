<template>
  <div class="landing">
    <section id="kv">
      <p>
        我們提供一個<strong>以太坊募資管道</strong><br />
        讓一般大眾可對<strong>浪貓一對一捐款</strong><br />
        <strong>解決中途資金</strong>來源問題<br />
      </p>
    </section>
    <section id="what">
      <h3>WHAT WE DO ?</h3>
      <p>NFT每次交易都會有固定比例成為該貓的生活費，實現自己養自己的公益模式</p>
      <img src="" alt="" />
      <h4>厝喵捐款智能合約特色</h4>
      <div class="feature">
        <div>
          <img src="" alt="" />
          <h5>捐款不入我手</h5>
          <p>在您購買NFT當下<br />捐款直接轉入中途錢包</p>
          <small>僅扣除34%平台營運費用</small>
        </div>
        <div>
          <img src="" alt="" />
          <h5>捐款脈絡透明化</h5>
          <p>已募得金額、來源皆可追蹤</p>
        </div>
        <div>
          <img src="" alt="" />
          <h5>錢包住著酷東西</h5>
          <p>您的愛心會化為厝喵住在錢包中<br />透過NFT展示你關注的議題</p>
        </div>
      </div>
    </section>

    <section id="how">
      <h3>HOW IT WORK</h3>
      <p>您可以透過購買 NFT，直接幫助需要您的浪貓</p>

      <div class="howto">
      <div class="example"></div>
      <div class="step">
        <div>
          <img src="" alt="" />
          <p>Step 1</p>
          <p>
            在我們的官網 <a href="" target="_blank">浪喵列表</a>或
            <a href="" target="_blank">opensea.io</a>
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Step 2</p>
          <p>查看浪喵故事，選擇你想要伸出援手的厝喵NFT</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Step 3</p>
          <p>
            購買NFT等同於在線上認養浪貓，以太幣將轉化為浪貓生活基金，厝喵NFT也會住進您的虛擬錢包
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Step 4</p>
          <p>
            感謝您的愛心！您可以持續回到<a href="" target="_blank">浪喵列表</a
            >看該喵的後續生活紀錄
          </p>
        </div>
      </div>
      </div>
      <button type="button" onclick="location.href='https://opensea.io/'">
        GO TO OPENSEA.io
      </button>
    </section>

    <section id="faq">
      <h3>FREQUENTLY ASK QUESTIONS</h3>
      <p>這邊收錄了購買 NFT 的常見問題</p>
    </section>

    <section id="roadmap">
      <h3>Roadmap</h3>
    </section>

    <section id="release">
      <h3>RELEASE DATE: 2022/5/5</h3>
    </section>

    <section id="team">
      <h3>TEAM MEMBERS</h3>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Landing",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.landing {
  section {
    overflow: hidden;
  }
}
#kv {
  background-color: #fde8ef;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.145em;
    color: #201f1d;
  }
}
#what {
  background-color: #fff7f4;

  .feature {
    display: flex;
    justify-content: space-evenly;
  }
}

#how {
  background-color: #fddbdc;
  .howto{
    display: flex;
    justify-content: space-around;
  }

  .step{
    p {
      text-align: left;
    }
  }
}

#faq {
  background-color: #ffefe7;
}

#roadmap {
  background-color: white;
}

#release {
  background-color: #fde8ef;
}

#team {
  background-color: white;
}
</style>
