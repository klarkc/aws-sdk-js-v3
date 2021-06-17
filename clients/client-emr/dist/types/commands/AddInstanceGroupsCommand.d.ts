import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddInstanceGroupsInput, AddInstanceGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddInstanceGroupsCommandInput extends AddInstanceGroupsInput {
}
export interface AddInstanceGroupsCommandOutput extends AddInstanceGroupsOutput, __MetadataBearer {
}
/**
 * <p>Adds one or more instance groups to a running cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceGroupsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceGroupsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddInstanceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddInstanceGroupsCommandInput} for command's `input` shape.
 * @see {@link AddInstanceGroupsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddInstanceGroupsCommand extends $Command<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: AddInstanceGroupsCommandInput;
    constructor(input: AddInstanceGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
