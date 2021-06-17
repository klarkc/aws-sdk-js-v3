import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListInstanceGroupsInput, ListInstanceGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInstanceGroupsCommandInput extends ListInstanceGroupsInput {
}
export interface ListInstanceGroupsCommandOutput extends ListInstanceGroupsOutput, __MetadataBearer {
}
/**
 * <p>Provides all available details about the instance groups in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInstanceGroupsCommand extends $Command<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListInstanceGroupsCommandInput;
    constructor(input: ListInstanceGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
