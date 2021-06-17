import { HealthLakeClient } from "./HealthLakeClient";
import { CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput } from "./commands/CreateFHIRDatastoreCommand";
import { DeleteFHIRDatastoreCommandInput, DeleteFHIRDatastoreCommandOutput } from "./commands/DeleteFHIRDatastoreCommand";
import { DescribeFHIRDatastoreCommandInput, DescribeFHIRDatastoreCommandOutput } from "./commands/DescribeFHIRDatastoreCommand";
import { DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput } from "./commands/DescribeFHIRExportJobCommand";
import { DescribeFHIRImportJobCommandInput, DescribeFHIRImportJobCommandOutput } from "./commands/DescribeFHIRImportJobCommand";
import { ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput } from "./commands/ListFHIRDatastoresCommand";
import { StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput } from "./commands/StartFHIRExportJobCommand";
import { StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput } from "./commands/StartFHIRImportJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon HealthLake is a HIPAA eligibile service that allows customers to store,
 *          transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.</p>
 */
export declare class HealthLake extends HealthLakeClient {
    /**
     * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
     */
    createFHIRDatastore(args: CreateFHIRDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<CreateFHIRDatastoreCommandOutput>;
    createFHIRDatastore(args: CreateFHIRDatastoreCommandInput, cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void): void;
    createFHIRDatastore(args: CreateFHIRDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void): void;
    /**
     * <p>Deletes a Data Store. </p>
     */
    deleteFHIRDatastore(args: DeleteFHIRDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFHIRDatastoreCommandOutput>;
    deleteFHIRDatastore(args: DeleteFHIRDatastoreCommandInput, cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void): void;
    deleteFHIRDatastore(args: DeleteFHIRDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void): void;
    /**
     * <p>Gets the properties associated with the FHIR Data Store, including the Data Store ID,
     *          Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and
     *          Data Store endpoint.</p>
     */
    describeFHIRDatastore(args: DescribeFHIRDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFHIRDatastoreCommandOutput>;
    describeFHIRDatastore(args: DescribeFHIRDatastoreCommandInput, cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void): void;
    describeFHIRDatastore(args: DescribeFHIRDatastoreCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void): void;
    /**
     * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
     */
    describeFHIRExportJob(args: DescribeFHIRExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFHIRExportJobCommandOutput>;
    describeFHIRExportJob(args: DescribeFHIRExportJobCommandInput, cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void): void;
    describeFHIRExportJob(args: DescribeFHIRExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void): void;
    /**
     * <p>Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.</p>
     */
    describeFHIRImportJob(args: DescribeFHIRImportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFHIRImportJobCommandOutput>;
    describeFHIRImportJob(args: DescribeFHIRImportJobCommandInput, cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void): void;
    describeFHIRImportJob(args: DescribeFHIRImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void): void;
    /**
     * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
     *          status.</p>
     */
    listFHIRDatastores(args: ListFHIRDatastoresCommandInput, options?: __HttpHandlerOptions): Promise<ListFHIRDatastoresCommandOutput>;
    listFHIRDatastores(args: ListFHIRDatastoresCommandInput, cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void): void;
    listFHIRDatastores(args: ListFHIRDatastoresCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void): void;
    /**
     * <p>Begins a FHIR export job.</p>
     */
    startFHIRExportJob(args: StartFHIRExportJobCommandInput, options?: __HttpHandlerOptions): Promise<StartFHIRExportJobCommandOutput>;
    startFHIRExportJob(args: StartFHIRExportJobCommandInput, cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void): void;
    startFHIRExportJob(args: StartFHIRExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void): void;
    /**
     * <p>Begins a FHIR Import job.</p>
     */
    startFHIRImportJob(args: StartFHIRImportJobCommandInput, options?: __HttpHandlerOptions): Promise<StartFHIRImportJobCommandOutput>;
    startFHIRImportJob(args: StartFHIRImportJobCommandInput, cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void): void;
    startFHIRImportJob(args: StartFHIRImportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void): void;
}
