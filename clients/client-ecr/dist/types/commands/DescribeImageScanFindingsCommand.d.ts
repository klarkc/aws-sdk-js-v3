import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImageScanFindingsCommandInput extends DescribeImageScanFindingsRequest {
}
export interface DescribeImageScanFindingsCommandOutput extends DescribeImageScanFindingsResponse, __MetadataBearer {
}
/**
 * <p>Returns the scan findings for the specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageScanFindingsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageScanFindingsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImageScanFindingsCommand extends $Command<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput, ECRClientResolvedConfig> {
    readonly input: DescribeImageScanFindingsCommandInput;
    constructor(input: DescribeImageScanFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
