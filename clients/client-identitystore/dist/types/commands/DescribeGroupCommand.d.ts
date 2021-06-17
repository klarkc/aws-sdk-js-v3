import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGroupCommandInput extends DescribeGroupRequest {
}
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, DescribeGroupCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, DescribeGroupCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGroupCommand extends $Command<DescribeGroupCommandInput, DescribeGroupCommandOutput, IdentitystoreClientResolvedConfig> {
    readonly input: DescribeGroupCommandInput;
    constructor(input: DescribeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IdentitystoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGroupCommandInput, DescribeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
