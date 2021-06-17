import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseParametersCommandInput extends GetRelationalDatabaseParametersRequest {
}
export interface GetRelationalDatabaseParametersCommandOutput extends GetRelationalDatabaseParametersResult, __MetadataBearer {
}
/**
 * <p>Returns all of the runtime parameters offered by the underlying database software, or
 *       engine, for a specific database in Amazon Lightsail.</p>
 *          <p>In addition to the parameter names and values, this operation returns other information
 *       about each parameter. This information includes whether changes require a reboot, whether the
 *       parameter is modifiable, the allowed values, and the data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseParametersCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseParametersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseParametersCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseParametersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseParametersCommand extends $Command<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseParametersCommandInput;
    constructor(input: GetRelationalDatabaseParametersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput>;
    private serialize;
    private deserialize;
}
