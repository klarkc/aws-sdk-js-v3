import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFHIRDatastoreCommandInput extends CreateFHIRDatastoreRequest {
}
export interface CreateFHIRDatastoreCommandOutput extends CreateFHIRDatastoreResponse, __MetadataBearer {
}
/**
 * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, CreateFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new CreateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFHIRDatastoreCommand extends $Command<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput, HealthLakeClientResolvedConfig> {
    readonly input: CreateFHIRDatastoreCommandInput;
    constructor(input: CreateFHIRDatastoreCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthLakeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput>;
    private serialize;
    private deserialize;
}
