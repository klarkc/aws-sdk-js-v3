import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateGrantVersionRequest, CreateGrantVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGrantVersionCommandInput extends CreateGrantVersionRequest {
}
export interface CreateGrantVersionCommandOutput extends CreateGrantVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateGrantVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateGrantVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGrantVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGrantVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGrantVersionCommand extends $Command<CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CreateGrantVersionCommandInput;
    constructor(input: CreateGrantVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput>;
    private serialize;
    private deserialize;
}
