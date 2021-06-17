import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAssetModelRequest, DescribeAssetModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAssetModelCommandInput extends DescribeAssetModelRequest {
}
export interface DescribeAssetModelCommandOutput extends DescribeAssetModelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAssetModelCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAssetModelCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeAssetModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetModelCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetModelCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAssetModelCommand extends $Command<DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DescribeAssetModelCommandInput;
    constructor(input: DescribeAssetModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput>;
    private serialize;
    private deserialize;
}
