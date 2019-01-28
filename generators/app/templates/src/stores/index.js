/**
 * Create By lixiang040
 * Create At 2018/10/19
 */
import CommonStore from './common'
import ElementManage from './elementManage'
import TempManage from './tempManage'
import TempManageDetail from './tempManageDetail'
import TempManageConfig from './tempManageConfig'
import { configure } from 'mobx'

configure({ enforceActions: true })
class Store {
    constructor() {
        this.commonStore = new CommonStore()
        this.elementManage = new ElementManage()
        this.tempManage = new TempManage()
        this.tempManageDetail = new TempManageDetail()
        this.tempManageConfig = new TempManageConfig()
        this.elementManage = new ElementManage()
    }

}
export default new Store()
