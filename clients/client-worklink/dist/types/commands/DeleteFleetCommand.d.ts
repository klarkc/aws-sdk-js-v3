import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DeleteFleetRequest, DeleteFleetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFleetCommandInput extends DeleteFleetRequest {
}
export interface DeleteFleetCommandOutput extends DeleteFleetResponse, __MetadataBearer {
}
/**
 * <p>Deletes a fleet. Prevents users from accessing previously associated websites. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DeleteFleetCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DeleteFleetCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFleetCommand extends $Command<DeleteFleetCommandInput, DeleteFleetCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DeleteFleetCommandInput;
    constructor(input: DeleteFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput>;
    private serialize;
    private deserialize;
}
