import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { ListFHIRDatastoresRequest, ListFHIRDatastoresResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFHIRDatastoresCommandInput extends ListFHIRDatastoresRequest {
}
export interface ListFHIRDatastoresCommandOutput extends ListFHIRDatastoresResponse, __MetadataBearer {
}
/**
 * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRDatastoresCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRDatastoresCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRDatastoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListFHIRDatastoresCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFHIRDatastoresCommand extends $Command<ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput, HealthLakeClientResolvedConfig> {
    readonly input: ListFHIRDatastoresCommandInput;
    constructor(input: ListFHIRDatastoresCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthLakeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput>;
    private serialize;
    private deserialize;
}
