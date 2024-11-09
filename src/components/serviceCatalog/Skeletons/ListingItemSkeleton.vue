<template>
  <div
    class="service slide-top-to-bottom"
  >
    <div class="header">
      <span class="service-status skeleton-loader">

        <p />
      </span>
      <div
        class="service-versions skeleton-loader"
      />
    </div>
    <div class="service-content">
      <h2 class="service-name skeleton-loader" />
      <p class="service-description skeleton-loader" />
    </div>
    <div class="service-info skeleton-loader">
      <div
        class="service-metrics"
      />

      <div class="service-developers" />
    </div>
  </div>
</template>
<script lang="ts" setup>



</script>
  <style lang="scss" scoped>

  .service{
      background-color: white;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 210px;
      list-style: none;
      padding: 25px;
      row-gap: 15px;
      .header{
          align-items: center;
          display: flex;
          justify-content: space-between;

          .service-status{
              height: 1.3rem;
              width: 200px;
              background-color: var(--border-color-light);
              align-items: center;
              color: var(--font-color-light);
              column-gap: 5px;
              display: flex;
              font-size: 1.2rem;
              font-weight: 400;
              .published{
                  color: var(--success-color);
              }
              .not_configured{
                  color: var(--warn-color);
              }
              .unpublished{
                  color: var(--font-color-light);
                opacity: 0.7
              }
          }
          .service-versions{
              height: 1.5rem;
              background-color: var(--border-color-light);
              width: 70px;
              background-color: var(--secondary-color-light);
              border-radius: 25px;
              color: var(--secondary-color);
              cursor: pointer;
              font-size: 1.3rem;
              font-weight: 600;
              padding: 10px 15px;

          }
      }
      .service-content{
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          .service-name{
              color: var(--font-color);
              font-size: 2rem;
              font-weight: 600;
              height: 2.2rem;
              width: 70%;
              background-color: var(--border-color-light);
          }
          .service-description{
              color: var(--font-color-light);
              font-size: 1.3rem;
              font-weight: 400;
              line-height: 20px;
              height: 1.5rem;
              width: 90%;
              background-color: var(--border-color-light);
          }
      }
      .service-info{
          display: flex;
          flex: 1;
          font-family: "Inter", sans-serif;
          height: 50px;
          background-color: var(--border-color-light);

          .unconfigured-service{
             align-items: flex-end;
             display: flex;
             .message{
              align-items: center;
              column-gap: 10px;
              display: flex;
              .dot{
                background-color: var(--font-color-light);
                border-radius: 50%;
                height: 6px;
                opacity: 0.5;
                width: 6px;
               }
               p{
                color: var(--font-color-light);
                font-size: 1.2rem;
                font-weight: 600;
               }
             }

          }
          .service-metrics{
              column-gap: 20px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              row-gap: 10px;
              .metric{
                  align-items: center;
                  column-gap: 5px;
                  display: flex;
                  font-size: 1.2rem;
                  font-weight: 600;

                  .dot{
                      background-color: var(--success-color);
                      border-radius: 50%;
                      height: 6px;
                      width: 6px;
                  }
                  .divider{
                      background-color: var(--font-color-light);
                      border-radius: 6px;
                      height: 3px;
                      width: 3px;
                  }
                  .metric-value{
                      color: var(--font-color);
                  }
                  .metric-name{
                      color: var(--font-color-light);
                  }
              }
          }
          .service-developers{
              align-items: flex-end;
              display: flex;
              flex: 1;
              flex-direction: column;
              justify-content: flex-end;

          }
      }
  }
  </style>