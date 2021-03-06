const axios = require('axios');
const url = 'https://api.scryfall.com';
const cardUrl = `${url}/cards/search?order=rarity&dir=desc`;

module.exports = {
  getSets: (req, res) => {
    axios.get(`${url}/sets/`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('mtg set request failed');
        res.sendStatus(500);
      });
  },

  getMonoColoredCards: (req, res) => {
    const { setCode, colors } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+color=${colors}`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error(`${colors} colored cards request failed`);
        res.sendStatus(500);
      });
  },

  getMultiColoredCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+color=${'multicolor'}+-type=land+-border=borderless+-frame=extendedart+-color=white+-color=blue+-color=black+-color=red+-color=green`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('multicolored cards request failed');
        res.sendStatus(500);
      });
  },

  getColorlessCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+color=${'colorless'}+-type=land`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('colorless cards request failed');
        res.sendStatus(500);
      });
  },

  getBorderlessCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+border=borderless+-frame=extendedart+-frame=showcase`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('borderless cards request failed');
        res.sendStatus(500);
      });
  },

  getExtendedArtCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+frame=extendedart+-border=borderless+-frame=showcase`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('extended art cards request failed');
        res.sendStatus(500);
      });
  },

  getShowcaseCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}+frame=showcase`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('showcase cards request failed');
        res.sendStatus(500);
      });
  },

  getLandCards: (req, res) => {
    const { setCode, land } = req.params;
    axios.get(`${cardUrl}&q=set=${setCode}${land === 'land' ? '+type=land+-type=basic+-border=borderless' : '+type=basic'}`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error(`${land} cards request failed`);
        res.sendStatus(500);
      });
  },

};
