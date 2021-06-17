import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableSsoRequest, EnableSsoResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableSsoCommandInput extends EnableSsoRequest {
}
export interface EnableSsoCommandOutput extends EnableSsoResult, __MetadataBearer {
}
/**
 * <p>Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableSsoCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableSsoCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableSsoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSsoCommandInput} for command's `input` shape.
 * @see {@link EnableSsoCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableSsoCommand extends $Command<EnableSsoCommandInput, EnableSsoCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableSsoCommandInput;
    constructor(input: EnableSsoCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSsoCommandInput, EnableSsoCommandOutput>;
    private serialize;
    private deserialize;
}
