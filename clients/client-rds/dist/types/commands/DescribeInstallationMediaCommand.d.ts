import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeInstallationMediaMessage, InstallationMediaMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstallationMediaCommandInput extends DescribeInstallationMediaMessage {
}
export interface DescribeInstallationMediaCommandOutput extends InstallationMediaMessage, __MetadataBearer {
}
/**
 * <p>Describes the available installation media for a DB engine that requires an
 *           on-premises customer provided license, such as Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link DescribeInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstallationMediaCommand extends $Command<DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeInstallationMediaCommandInput;
    constructor(input: DescribeInstallationMediaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstallationMediaCommandInput, DescribeInstallationMediaCommandOutput>;
    private serialize;
    private deserialize;
}
