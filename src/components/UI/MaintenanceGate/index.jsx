import { useUIStore } from '../../../store/ui'
import ComingSoon from '../../ComingSoon'
import { maintenancePages } from '../../../config/maintenance'

const MaintenanceGate = ({page, children}) => {
  const isMintenanceUnlocked = useUIStore((state) => state.isMaintenanceUnlocked)
  const isUnderMaintenance = maintenancePages[page]

  if (!isMintenanceUnlocked && isUnderMaintenance) {
    return <ComingSoon />
  }

  return children
}

export default MaintenanceGate
