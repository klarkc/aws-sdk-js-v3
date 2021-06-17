import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CustomerStorageMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStorageCommandInput {
}
export interface DescribeStorageCommandOutput extends CustomerStorageMessage, __MetadataBearer {
}
/**
 * <p>Returns account level backups storage size and provisional storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeStorageCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeStorageCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStorageCommand extends $Command<DescribeStorageCommandInput, DescribeStorageCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeStorageCommandInput;
    constructor(input: DescribeStorageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStorageCommandInput, DescribeStorageCommandOutput>;
    private serialize;
    private deserialize;
}
