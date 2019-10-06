const getMockedState = () => ({
  marketOverview: {
    list: [
      {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        slug: "bitcoin",
        num_market_pairs: 7993,
        date_added: "2013-04-28T00:00:00.000Z",
        tags: ["mineable"],
        max_supply: 21000000,
        circulating_supply: 17976775,
        total_supply: 17976775,
        platform: null,
        cmc_rank: 1,
        last_updated: "2019-10-06T14:20:36.000Z",
        quote: {
          USD: {
            price: 8002.15577222,
            volume_24h: 12432227758.3477,
            percent_change_1h: -0.419327,
            percent_change_24h: -1.12159,
            percent_change_7d: -1.06697,
            market_cap: 143852953832.15018,
            last_updated: "2019-10-06T14:20:36.000Z"
          }
        }
      },
      {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        slug: "ethereum",
        num_market_pairs: 5544,
        date_added: "2015-08-07T00:00:00.000Z",
        tags: ["mineable"],
        max_supply: null,
        circulating_supply: 108036277.6865,
        total_supply: 108036277.6865,
        platform: null,
        cmc_rank: 2,
        last_updated: "2019-10-06T14:20:23.000Z",
        quote: {
          USD: {
            price: 173.362077667,
            volume_24h: 5881736500.93474,
            percent_change_1h: -0.994554,
            percent_change_24h: -0.551353,
            percent_change_7d: 2.1092,
            market_cap: 18729393563.14059,
            last_updated: "2019-10-06T14:20:23.000Z"
          }
        }
      },
      {
        id: 52,
        name: "XRP",
        symbol: "XRP",
        slug: "ripple",
        num_market_pairs: 466,
        date_added: "2013-08-04T00:00:00.000Z",
        tags: [],
        max_supply: 100000000000,
        circulating_supply: 43121735112,
        total_supply: 99991336298,
        platform: null,
        cmc_rank: 3,
        last_updated: "2019-10-06T14:20:04.000Z",
        quote: {
          USD: {
            price: 0.254481252104,
            volume_24h: 996079442.615505,
            percent_change_1h: -0.127051,
            percent_change_24h: 0.437,
            percent_change_7d: 6.25333,
            market_cap: 10973673144.198782,
            last_updated: "2019-10-06T14:20:04.000Z"
          }
        }
      },
      {
        id: 825,
        name: "Tether",
        symbol: "USDT",
        slug: "tether",
        num_market_pairs: 3399,
        date_added: "2015-02-25T00:00:00.000Z",
        tags: [],
        max_supply: null,
        circulating_supply: 4108044456.1,
        total_supply: 4207771504.46,
        platform: {
          id: 83,
          name: "Omni",
          symbol: "OMNI",
          slug: "omni",
          token_address: "31"
        },
        cmc_rank: 4,
        last_updated: "2019-10-06T14:20:17.000Z",
        quote: {
          USD: {
            price: 1.01027046918,
            volume_24h: 14763930227.2076,
            percent_change_1h: -0.107227,
            percent_change_24h: 0.678892,
            percent_change_7d: 0.248619,
            market_cap: 4150236000.0764446,
            last_updated: "2019-10-06T14:20:17.000Z"
          }
        }
      },
      {
        id: 1831,
        name: "Bitcoin Cash",
        symbol: "BCH",
        slug: "bitcoin-cash",
        num_market_pairs: 399,
        date_added: "2017-07-23T00:00:00.000Z",
        tags: ["mineable"],
        max_supply: 21000000,
        circulating_supply: 18042462.5,
        total_supply: 18042462.5,
        platform: null,
        cmc_rank: 5,
        last_updated: "2019-10-06T14:20:07.000Z",
        quote: {
          USD: {
            price: 221.099867474,
            volume_24h: 1076027263.18159,
            percent_change_1h: -0.527351,
            percent_change_24h: -0.0545364,
            percent_change_7d: 0.444272,
            market_cap: 3989186067.654615,
            last_updated: "2019-10-06T14:20:07.000Z"
          }
        }
      },
      {
        id: 2,
        name: "Litecoin",
        symbol: "LTC",
        slug: "litecoin",
        num_market_pairs: 539,
        date_added: "2013-04-28T00:00:00.000Z",
        tags: ["mineable"],
        max_supply: 84000000,
        circulating_supply: 63408804.1355418,
        total_supply: 63408804.1355418,
        platform: null,
        cmc_rank: 6,
        last_updated: "2019-10-06T14:20:05.000Z",
        quote: {
          USD: {
            price: 55.9902874581,
            volume_24h: 2179847324.01415,
            percent_change_1h: -0.563744,
            percent_change_24h: -0.731767,
            percent_change_7d: 3.48159,
            market_cap: 3550277170.923345,
            last_updated: "2019-10-06T14:20:05.000Z"
          }
        }
      },
      {
        id: 1765,
        name: "EOS",
        symbol: "EOS",
        slug: "eos",
        num_market_pairs: 358,
        date_added: "2017-07-01T00:00:00.000Z",
        tags: [],
        max_supply: null,
        circulating_supply: 934728371.7778,
        total_supply: 1031428383.0306,
        platform: null,
        cmc_rank: 7,
        last_updated: "2019-10-06T14:20:06.000Z",
        quote: {
          USD: {
            price: 2.97309602403,
            volume_24h: 1091628003.50231,
            percent_change_1h: -0.205994,
            percent_change_24h: 0.0573783,
            percent_change_7d: 6.92849,
            market_cap: 2779037205.680613,
            last_updated: "2019-10-06T14:20:06.000Z"
          }
        }
      },
      {
        id: 1839,
        name: "Binance Coin",
        symbol: "BNB",
        slug: "binance-coin",
        num_market_pairs: 266,
        date_added: "2017-07-25T00:00:00.000Z",
        tags: [],
        max_supply: 187536713,
        circulating_supply: 155536713,
        total_supply: 187536713,
        platform: null,
        cmc_rank: 8,
        last_updated: "2019-10-06T14:20:06.000Z",
        quote: {
          USD: {
            price: 15.3530353461,
            volume_24h: 117558141.052776,
            percent_change_1h: -0.577061,
            percent_change_24h: -1.13687,
            percent_change_7d: -0.245197,
            market_cap: 2387960652.3052115,
            last_updated: "2019-10-06T14:20:06.000Z"
          }
        }
      },
      {
        id: 3602,
        name: "Bitcoin SV",
        symbol: "BSV",
        slug: "bitcoin-sv",
        num_market_pairs: 155,
        date_added: "2018-11-09T00:00:00.000Z",
        tags: ["mineable"],
        max_supply: 21000000,
        circulating_supply: 17854985.7508877,
        total_supply: 17854985.7508877,
        platform: null,
        cmc_rank: 9,
        last_updated: "2019-10-06T14:20:12.000Z",
        quote: {
          USD: {
            price: 82.3184477641,
            volume_24h: 190809224.149905,
            percent_change_1h: -0.826798,
            percent_change_24h: -0.0899475,
            percent_change_7d: -0.583398,
            market_cap: 1469794711.863199,
            last_updated: "2019-10-06T14:20:12.000Z"
          }
        }
      },
      {
        id: 512,
        name: "Stellar",
        symbol: "XLM",
        slug: "stellar",
        num_market_pairs: 292,
        date_added: "2014-08-05T00:00:00.000Z",
        tags: [],
        max_supply: null,
        circulating_supply: 20117691448.9818,
        total_supply: 105383593993.5,
        platform: null,
        cmc_rank: 10,
        last_updated: "2019-10-06T14:20:03.000Z",
        quote: {
          USD: {
            price: 0.0585654528739,
            volume_24h: 128814838.013675,
            percent_change_1h: -0.286387,
            percent_change_24h: -0.264718,
            percent_change_7d: 0.807548,
            market_cap: 1178201710.4870045,
            last_updated: "2019-10-06T14:20:03.000Z"
          }
        }
      }
    ],
    message: {}
  },
  liquidityAnalysis: {
    list: [
      {
        x: 143782724095.22977,
        y: 12433880192.8239,
        z: -1.16986,
        name: "Bitcoin"
      },
      {
        x: 18747346930.752613,
        y: 5896007338.66917,
        z: -0.456025,
        name: "Ethereum"
      },
      {
        x: 10970943120.602821,
        y: 995088882.358444,
        z: 0.412013,
        name: "XRP"
      },
      {
        x: 4153538987.3632426,
        y: 14769375500.8739,
        z: 0.759018,
        name: "Tether"
      },
      {
        x: 3988274700.636335,
        y: 1076150614.89249,
        z: -0.0773698,
        name: "Bitcoin Cash"
      },
      {
        x: 3547879715.7053375,
        y: 2180227219.31862,
        z: -0.798802,
        name: "Litecoin"
      },
      {
        x: 2778897671.158521,
        y: 1093235260.99731,
        z: 0.0523544,
        name: "EOS"
      },
      {
        x: 2387135109.362599,
        y: 117505837.712702,
        z: -1.17105,
        name: "Binance Coin"
      },
      {
        x: 1468623248.1032162,
        y: 190860975.044394,
        z: -0.169578,
        name: "Bitcoin SV"
      },
      {
        x: 1179028490.0226896,
        y: 129040482.809928,
        z: -0.19473,
        name: "Stellar"
      }
    ],
    message: {}
  },
  loader: {
    isLoading: false
  },
  pagination: {
    start: 1,
    limit: 10
  }
});

export default getMockedState;
