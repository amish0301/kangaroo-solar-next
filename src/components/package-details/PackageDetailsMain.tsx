// import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import { packagesData } from "@/data/package-data";
import { TserviceData, idType } from "@/interFace/interFace";
import LatestInstallations from "../home/LatestInstallations";
import BreadCambThree from "../shearedComponents/BreadCambThree";
import EnergySystem from "./EnergySystem";
import SolarSystemInfo from "./SolarSystemInfo";
import Thumbnail from "./Thumbnail";

const PackageDetailsMain = ({ id }: idType) => {
  // Search inside nested packages only (since category.id is not relevant for details)
  const data = packagesData
    .flatMap((category) => category.packages)
    .find((pkg) => pkg.id === id);

  const isResidentialPackage = id >= 101 && id <= 105;

  return (
    <>
      <BreadCambThree
        subPage={data?.title ?? "Our Packages"}
        title={data?.title ?? "Our Packages"}
        bgImg={data?.img}
        redirect={data?.href ?? "/"}
        pages={data?.details ?? "Packages"}
      />
      {data ? (
        <>
          <SolarSystemInfo data={data as TserviceData} />
          <Thumbnail isResidentialPackage={isResidentialPackage} />
          <EnergySystem
            data={data as TserviceData}
            isResidentialPackage={isResidentialPackage}
            packageTypeId={id}
          />
          <LatestInstallations classOne="two" noBottom="" />
        </>
      ) : (
        <p>Package not found</p>
      )}
    </>
  );
};

export default PackageDetailsMain;
