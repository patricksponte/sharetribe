import { Component, PropTypes } from 'react';
import { div, img, p } from 'r-dom';

import css from './SearchPage.css';

const KM = ':km';
const MILES = ':miles';

class SearchPage extends Component {

  constructor(props, context) {
    super(props, context);

    // TODO clean these testing / debugging stuff
    /* eslint-disable no-unused-vars */

    const currentPageData = props.searchPage.data;
    const queryMeta = currentPageData.get(':meta');

    if (queryMeta.get(':total') >= 1) {
      const data = currentPageData.get(':data');
      const listingId = data.get(0).get(':id');
      const listingMeta = data.get(0).get(':meta');
      const listingDistanceUnit = listingMeta.get(':distance-unit');
      const isKM = listingMeta.get(':distance-unit') === KM;
      const isMiles = listingMeta.get(':distance-unit') === MILES;

      this.listings = data || [];
    }

    /* eslint-enable no-unused-vars */
    // TODO /clean these

  }

  render() {
    return div({ className: css.searchPage }, [
      div({ className: css.listingContainer }, this.listings.map((l) =>
        div({
          className: css.listing,
          key: `card_${l.get(':id')}`,
        }, [
          div({ className: css.squareWrapper },
            img({
              className: css.thumbnail,
              src: 'http://placehold.it/264x264',
            }),
          ),
          div({ className: css.info }, [
            p({ className: css.title }, l.get(':source').get(':title')),
          ]),
        ])
      )),
    ]);
  }
}

const { object } = PropTypes;

SearchPage.propTypes = {
  searchPage: object, // eslint-disable-line react/forbid-prop-types
};

export default SearchPage;
