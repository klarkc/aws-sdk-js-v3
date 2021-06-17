import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetOperationsRequest, GetOperationsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOperationsCommandInput extends GetOperationsRequest {
}
export interface GetOperationsCommandOutput extends GetOperationsResult, __MetadataBearer {
}
/**
 * <p>Returns information about all operations.</p>
 *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged
 *       by making each subsequent call to <code>GetOperations</code> use the maximum (last)
 *         <code>statusChangedAt</code> value from the previous request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationsCommandInput} for command's `input` shape.
 * @see {@link GetOperationsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOperationsCommand extends $Command<GetOperationsCommandInput, GetOperationsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetOperationsCommandInput;
    constructor(input: GetOperationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOperationsCommandInput, GetOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
