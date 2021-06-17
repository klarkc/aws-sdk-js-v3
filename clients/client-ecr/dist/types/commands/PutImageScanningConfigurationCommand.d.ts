import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutImageScanningConfigurationCommandInput extends PutImageScanningConfigurationRequest {
}
export interface PutImageScanningConfigurationCommandOutput extends PutImageScanningConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the image scanning configuration for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutImageScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutImageScanningConfigurationCommand extends $Command<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutImageScanningConfigurationCommandInput;
    constructor(input: PutImageScanningConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
