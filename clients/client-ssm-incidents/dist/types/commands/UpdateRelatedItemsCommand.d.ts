import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { UpdateRelatedItemsInput, UpdateRelatedItemsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRelatedItemsCommandInput extends UpdateRelatedItemsInput {
}
export interface UpdateRelatedItemsCommandOutput extends UpdateRelatedItemsOutput, __MetadataBearer {
}
/**
 * <p>Add or remove related items from the related items tab of an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link UpdateRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRelatedItemsCommand extends $Command<UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: UpdateRelatedItemsCommandInput;
    constructor(input: UpdateRelatedItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput>;
    private serialize;
    private deserialize;
}
