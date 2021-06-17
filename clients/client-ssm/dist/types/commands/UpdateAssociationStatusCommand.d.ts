import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateAssociationStatusRequest, UpdateAssociationStatusResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAssociationStatusCommandInput extends UpdateAssociationStatusRequest {
}
export interface UpdateAssociationStatusCommandOutput extends UpdateAssociationStatusResult, __MetadataBearer {
}
/**
 * <p>Updates the status of the Systems Manager document associated with the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssociationStatusCommand extends $Command<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateAssociationStatusCommandInput;
    constructor(input: UpdateAssociationStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput>;
    private serialize;
    private deserialize;
}
