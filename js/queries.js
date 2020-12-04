var   getInstallRequests = obj =>{
      sql = 'select a.id install_site_id,b.id install_request_id,c.id client_site_id,d.id client_id,d.name,a.address from install_sites a '
      sql+= 'left outer join install_requests b on b.id=a.install_request_id '
      sql+= 'left outer join client_sites c on c.id=a.client_site_id '
      sql+= 'left outer join clients d on d.id=c.client_id  '
      sql+= 'where a.status="'+obj.status+'"'
      console.log('Install Requests',sql)
      return sql
    },
    getInstallImages = obj => {
      sql = 'select a.id,a.install_site_id,a.img,a.roworder,a.description,a.username,a.create_date,a.title,d.name from install_images a '
      sql+= 'left outer join install_sites b on b.id=a.install_site_id '
      sql+= 'left outer join client_sites c on c.id=b.client_site_id '
      sql+= 'left outer join clients d on d.id=c.client_id '
      sql+= 'where install_site_id='+obj.install_site_id
      console.log('Install Images',sql)
      return sql
    },
    saveinstallimage = obj => {
      sql = 'insert into install_images '
      sql+= '(install_site_id,img) '
      sql+= 'values '
      sql+= '('+obj.install_site_id+',"'+obj.img+'")'
      console.log('Save Install Image',sql)
      return sql
    },
    removeinstallimage = obj => {
      sql = 'delete from install_images '
      sql+= 'where id = ' + obj.id
      console.log('Remove install image',sql)
      return sql
    },
    getInstallationByClientId = obj => {
      sql = 'select a.name,c.status from clients a '
      sql+= 'left outer join client_sites b on b.client_id=a.id '
      sql+= 'left outer join install_requests c on c.client_site_id=b.id '
      sql+= 'where a.id = ' + obj.id + ' '
      sql = 'select a.id install_site_id,b.id install_request_id,c.id client_site_id,d.id client_id,d.name,a.address '
      sql+= 'from install_sites a '
      sql+= 'left outer join install_requests b on b.id=a.install_request_id '
      sql+= 'left outer join client_sites c on c.id=a.client_site_id '
      sql+= 'left outer join clients d on d.id=c.client_id  '
      sql+= 'where d.id="'+obj.id+'"'
      console.log('Install Requests',sql)
      return sql
    },
    getClientById = obj => {
      sql = 'select id,name,address from clients where id='+obj.id
      console.log('getClientById',sql)
      return sql
    },
    getClientByInstallSiteId = obj => {
      sql = 'select a.id,a.name,a.address from clients a '
      sql+= 'left outer join client_sites b on b.client_id=a.id '
      sql+= 'left outer join install_sites c on c.client_site_id=b.id '
      sql+= 'where c.id='+obj.install_site_id
      console.log('get client by install site',sql)
      return sql
    }
module.exports = {
  getClientByInstallSiteId:getClientByInstallSiteId,
  getInstallationByClientId : getInstallationByClientId,
  getClientById:getClientById,
  removeinstallimage:removeinstallimage,
  saveinstallimage:saveinstallimage,
  getInstallImages:getInstallImages,
  getInstallRequests:getInstallRequests
}
