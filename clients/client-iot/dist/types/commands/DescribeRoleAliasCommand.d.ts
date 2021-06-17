import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeRoleAliasRequest, DescribeRoleAliasResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRoleAliasCommandInput extends DescribeRoleAliasRequest {
}
export interface DescribeRoleAliasCommandOutput extends DescribeRoleAliasResponse, __MetadataBearer {
}
/**
 * <p>Describes a role alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeRoleAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRoleAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRoleAliasCommand extends $Command<DescribeRoleAliasCommandInput, DescribeRoleAliasCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeRoleAliasCommandInput;
    constructor(input: DescribeRoleAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRoleAliasCommandInput, DescribeRoleAliasCommandOutput>;
    private serialize;
    private deserialize;
}
