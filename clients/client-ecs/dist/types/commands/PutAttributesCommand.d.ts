import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAttributesRequest, PutAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAttributesCommandInput extends PutAttributesRequest {
}
export interface PutAttributesCommandOutput extends PutAttributesResponse, __MetadataBearer {
}
/**
 * <p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist,
 * 			it is created. If the attribute exists, its value is replaced with the specified value.
 * 			To delete an attribute, use <a>DeleteAttributes</a>. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAttributesCommand extends $Command<PutAttributesCommandInput, PutAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutAttributesCommandInput;
    constructor(input: PutAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAttributesCommandInput, PutAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
