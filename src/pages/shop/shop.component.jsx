import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'


class ShopPage extends React.Component {
    unsubscribeFromSnapShot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        
        collectionRef.onSnapshot(async snapShot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
           updateCollections(collectionsMap)
        })
    }
    
    render() {
        const { match } = this.props
        return(
            (
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </div>
            )
        )  
    }
}  

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage)