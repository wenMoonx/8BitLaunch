<template>
  <q-stepper
    mt-8
    border="2 solid primaryBg"
    id="over"
    rounded-xl
    flat
    v-model="step"
    header-nav
    ref="stepper"
    color="primary"
    animated
    :contracted="size.width.value < 1350"
  >
    <q-step
      :name="1"
      title="Approve Token"
      caption="Enter the token address and approve"
      prefix="1"
      :done="step > 1"
      :header-nav="step > 1"
    >
      <div mb-4 flex justify-between items-center>
        <div flex items-center gap-2 class="text-defaultText">
          <div bg-primary rounded-100 w-6 h-6 flex items-center justify-center>
            1
          </div>
          <div>Approve token</div>
        </div>
        <HBtn size="xms" outline to="/create-token">
          <span px-2>Create token </span>
        </HBtn>
      </div>
      <div class="text-defaultText">
        <div mt-8 mb-2 font-700 dark:text-white opacity-70 text-gray-8>
          Standard/Insured <span text-negative>*</span>
        </div>
        <div mb-6 fc>
          <q-radio v-model="type" val="standard" label="Standard" />
          <q-radio v-model="type" val="insured" label="Insured" />
        </div>

        <!-- <HCheckbox
          v-if="$route.query.type === 'special'"
          mb-4
          dense
          v-model="stealth"
          text="Stealth Launch?"
        /> -->
        <HInput
          v-if="!stealth"
          :rules="v.required"
          v-model="sender.token"
          label="Token Address"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
        />

        <div mt-8 mb-2 font-700 dark:text-white opacity-70 text-gray-8>
          Currency <span text-negative>*</span>
        </div>

        <div fc>
          <q-radio v-model="shape" val="bnb" label="BNB" />
          <q-radio v-model="shape" val="busd" label="BUSD" />
          <q-radio v-model="shape" val="usdt" label="USDT" />
          <q-radio v-model="shape" val="usdc" label="USDC" />
        </div>

        <div mt-8 mb-2 font-700 dark:text-white opacity-70 text-gray-8>
          Fee Options <span text-negative>*</span>
        </div>

        <div fc>
          <div flex items-center gap-4>
            <q-radio
              v-model="fee"
              val="5"
              label="2% BNB raised only (Recommended)"
            />
          </div>
          <div flex items-center gap-4>
            <q-radio
              v-model="fee"
              val="2"
              label="1% BNB raised + 1% token sold"
            />
            <div pxs>Token sell might reflect chart in negative way...</div>
          </div>
        </div>

        <div mt-8 flex items-center gap-4>
          <HCheckbox v-model="auto" text="Auto list?" />
          <div pxs>
            Select this option if you want Liquidity to be added automagically,
            if you preffer to add manually leave this unchecked.
          </div>
        </div>

        <Divider mt-4 opacity-10 />
      </div>

      <q-stepper-navigation>
        <HBtn w-full @click="step = 2" color="primary" label="Continue" />
      </q-stepper-navigation>
      <div text-center pxs mt-4 class="text-defaultText">
        In order to continue, please enter correct token address.
      </div>
    </q-step>

    <q-step
      :name="2"
      title="Presale Information"
      caption="Enter all details about launchpad"
      prefix="2"
      :done="step > 2"
      :header-nav="step > 2"
    >
      <div mb-4 flex justify-between items-center>
        <div flex items-center gap-2 class="text-defaultText">
          <div bg-primary rounded-100 w-6 h-6 flex items-center justify-center>
            2
          </div>
          <div>Presale Information</div>
        </div>
      </div>
      <div class="text-defaultText">
        <HInput
          type="number"
          :rules="v.requiredNum"
          v-model="sender.rate"
          label="Presale Rate"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
        />
        <div pxs>If I spend 1 BNB, how much token will I recieve?</div>

        <div mt-8 mb-2 font-700 dark:text-white opacity-70 text-gray-8>
          Presale type <span text-negative>*</span>
          <span pxs> (You can toggle this later)</span>
        </div>

        <div flex gap-4>
          <q-radio dense v-model="wl" val="yes" label="Whitelist" />
          <q-radio dense v-model="wl" val="no" label="Public" />
        </div>

        <div mt-6>
          <HTextarea
            v-if="wl === 'yes'"
            :rules="v.required"
            v-model="sender.wls"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            label="Addresses in CSV format"
          />
        </div>

        <div mt-8 grid md:grid-cols-2 gap-4>
          <HInput
            type="number"
            :rules="v.requiredNum"
            v-model="sender.hardcap"
            label="Hard cap (BNB)"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />
          <HInput
            type="number"
            :rules="v.requiredNum"
            v-model="sender.softcap"
            label="Soft cap (BNB)"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />
          <HInput
            type="number"
            :rules="v.requiredNum"
            v-model="sender.minbuy"
            label="Minimum buy (BNB)"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />
          <HInput
            type="number"
            :rules="v.requiredNum"
            v-model="sender.maxbuy"
            label="Maximum buy (BNB)"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />

          <div>
            <div mb-2 font-700 dark:text-white opacity-70 text-gray-8>
              Unsold tokens <span text-negative>*</span>
              <span pxs> (Burn is recommended)</span>
            </div>
            <HSelect
              rounded-lg
              py-1
              v-model="refundType"
              :options="['Refund', 'Burn']"
            />
          </div>
          <div>
            <div mb-2 font-700 dark:text-white opacity-70 text-gray-8>
              Listing Router <span text-negative>*</span>
              <span pxs> (ProDEX is recommended)</span>
            </div>
            <HSelect
              rounded-lg
              py-1
              v-model="dex"
              :options="['ProDEX', 'PancakeSwap']"
            />
          </div>

          <div>
            <HInput
              type="number"
              :rules="[(val: number) => (val > 51 && val <= 100) || 'Liquidity % has to be in 51 - 100% range']"
              v-model="sender.liq"
              label="Liquidity %"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
            <div pxs>Min 51%</div>
          </div>
          <div>
            <HInput
              type="number"
              :rules="v.requiredNum"
              v-model="sender.listingrate"
              label="Listing rate"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
            <div pxs>1 BNB = 200 MyToken</div>
          </div>
        </div>

        <div mt-4 fc lg:flex-row gap-4>
          <div gap-4 flex justify-between flex-1>
            <HInput
              w-full
              flex-1
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
              v-model="startDate"
              mask="date"
              label="Start Date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="startDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </HInput>
            <HInput
              flex-1
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
              v-model="startTime"
              mask="time"
              label="Start Time"
              :rules="['time']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="startTime">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </HInput>
          </div>
          <div gap-4 flex justify-between flex-1>
            <HInput
              flex-1
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
              v-model="endDate"
              mask="date"
              label="End Date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="endDate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </HInput>
            <HInput
              flex-1
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
              v-model="endTime"
              mask="time"
              label="End Time"
              :rules="['time']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="endTime">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </HInput>
          </div>
        </div>

        <div>
          <HInput
            type="number"
            :rules="v.requiredNum"
            v-model="sender.liqLockUp"
            label="Liqudity lock (days)"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />
        </div>

        <HCheckbox v-model="vesting" text="Team Vesting?" />

        <Divider mt-4 opacity-10 />
      </div>
      <!-- <HBtn outline w-full my-4><span py-8>Approve Transaction</span></HBtn> -->
      <q-stepper-navigation>
        <HBtn w-full @click="step = 3" color="primary" label="Continue" />
      </q-stepper-navigation>

      <div text-center pxs mt-4 class="text-defaultText">
        In order to continue, please approve transaction.
      </div>
    </q-step>

    <q-step
      :name="3"
      title="Project details"
      caption="Describe your project to investors"
      prefix="3"
      :done="step > 3"
      :header-nav="step > 3"
    >
      <div mb-4 flex justify-between items-center>
        <div flex items-center gap-2 class="text-defaultText">
          <div bg-primary rounded-100 w-6 h-6 flex items-center justify-center>
            3
          </div>
          <div>Project details</div>
        </div>
      </div>
      <div class="text-defaultText">
        <div grid gap-4 grid-cols-1 md:grid-cols-2>
          <div>
            <HInput
              :rules="v.required"
              v-model="sender.logo"
              label="Logo"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
            <div pxs>
              URL must have supported extention (.png, .jpg, .jpeg, .svg)...
            </div>
          </div>

          <div>
            <HInput
              :rules="v.required"
              v-model="sender.webstie"
              label="Website"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.facebook"
              label="Facebook"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.twitter"
              label="Twitter"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.github"
              label="Github"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.telegram"
              label="Telegram"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.instagram"
              label="Instagram"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>

          <div>
            <HInput
              v-model="sender.discord"
              label="Discord"
              :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
            />
          </div>
        </div>

        <div>
          <HInput
            v-model="sender.reddit"
            label="Reddit"
            :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          />
        </div>

        <HTextarea
          class="mb-4"
          label="Description"
          :bgColor="theme === 'dark' ? 'bg-primaryBg' : ''"
          v-model="sender.desc"
        />

        <Divider mt-4 opacity-10 />
      </div>
      <q-stepper-navigation>
        <HBtn w-full @click="step = 4" color="primary" label="Continue" />
      </q-stepper-navigation>
    </q-step>
    <q-step
      :name="4"
      title="Create"
      caption="Create your presale"
      prefix="4"
      :header-nav="step > 4"
    >
      <div mb-4 flex justify-between items-center>
        <div flex items-center gap-2 class="text-defaultText">
          <div bg-primary rounded-100 w-6 h-6 flex items-center justify-center>
            4
          </div>
          <div>Create</div>
        </div>
      </div>
      <div class="text-defaultText" fc mt-4 pt-4 border-t border-secondaryBg>
        <div flex justify-between items-center pb-3 border-b border-secondaryBg>
          <span font-500>Presale Address</span>
          <div fc items-end>
            <span text-xs mb-1>0xE7A36B3b01F48157a95F588fdc209c8bB1C7AD5F</span>
            <span text-xs font-300 opacity-60
              >Do not send BNB directly to the presale address.</span
            >
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Token name</span>
          <div fc items-end>
            <span text-xs>TEST</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Token symbol</span>
          <div fc items-end>
            <span text-xs>TST</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Total supply</span>
          <div fc items-end>
            <span text-xs>100,000,000.0</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Tokens for presale</span>
          <div fc items-end>
            <span text-xs>30,000,000.0</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Tokens for liquidity</span>
          <div fc items-end>
            <span text-xs>18,900,000.0</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Soft cap</span>
          <div fc items-end>
            <span text-xs>100 BNB</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Presale start time (UTC)</span>
          <div fc items-end>
            <span text-xs>2022-11-14 20:00</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Presale end time (UTC)</span>
          <div fc items-end>
            <span text-xs>2022-11-17 20:00</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Unused tokens</span>
          <div fc items-end>
            <span text-xs>Refund</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Liquidity percent</span>
          <div fc items-end>
            <span text-xs>70%</span>
          </div>
        </div>
        <div flex justify-between items-center py-3 border-b border-secondaryBg>
          <span font-500>Liquidity unlock time (UTC)</span>
          <div fc items-end>
            <span text-xs>2023-11-18 20:00</span>
          </div>
        </div>
      </div>
      <Divider mt-4 opacity-10 />
      <q-stepper-navigation>
        <HBtn w-full color="primary" label="Finish" />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script setup lang="ts">
  const step = ref(1);
  const modal = $ref(false);
  const size = useWindowSize();
  const shape = $ref('bnb');
  const fee = $ref('5');
  const auto = $ref(true);
  const wl = $ref('yes');
  const refundType = $ref('Burn');
  const dex = $ref('ProDEX');
  const stealth = $ref(false);
  const type = $ref('standard');

  const vesting = $ref(false);
  const startDate = $ref(new Date().toISOString());
  const startTime = $ref('12:00');
  const endDate = $ref(new Date().toISOString());
  const endTime = $ref('12:00');

  const theme = useQDarkMode();
  const sender: { [key: string]: string } = reactive({
    token: '',
  });
</script>

<style lang="scss">
  #over {
    .q-stepper__tab {
      background-color: var(--q-primaryBg) !important;
    }
    .q-stepper--bordered,
    .stepper__header--border {
      border: 1px solid var(--q-primaryBg) !important;
    }
  }

  .q-menu {
    @apply border border-2 border-accent rounded-lg;
  }
</style>
