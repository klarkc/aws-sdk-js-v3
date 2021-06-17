import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteAttributesRequest, DeleteAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAttributesCommandInput extends DeleteAttributesRequest {
}
export interface DeleteAttributesCommandOutput extends DeleteAttributesResponse, __MetadataBearer {
}
/**
 * <p>Deletes one or more custom attributes from an Amazon ECS resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAttributesCommand extends $Command<DeleteAttributesCommandInput, DeleteAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteAttributesCommandInput;
    constructor(input: DeleteAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAttributesCommandInput, DeleteAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
