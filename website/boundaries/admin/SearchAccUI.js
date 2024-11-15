// SearchAccUI.js
import SearchAccController from '../controllers/SearchAccController';

class SearchAccUI {
    searchAccount(criteria) {
        return SearchAccController.searchAccount(criteria);
    }
}

export default SearchAccUI;
