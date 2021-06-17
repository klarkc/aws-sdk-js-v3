import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConformancePackRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConformancePackCommandInput extends DeleteConformancePackRequest {
}
export interface DeleteConformancePackCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that
 * 			conformance pack.</p>
 * 		       <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete.
 * 			You cannot update a conformance pack while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConformancePackCommandInput} for command's `input` shape.
 * @see {@link DeleteConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConformancePackCommand extends $Command<DeleteConformancePackCommandInput, DeleteConformancePackCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConformancePackCommandInput;
    constructor(input: DeleteConformancePackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConformancePackCommandInput, DeleteConformancePackCommandOutput>;
    private serialize;
    private deserialize;
}
