import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DescribeUserImportJobRequest, DescribeUserImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserImportJobCommandInput extends DescribeUserImportJobRequest {
}
export interface DescribeUserImportJobCommandOutput extends DescribeUserImportJobResponse, __MetadataBearer {
}
/**
 * <p>Describes the user import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new DescribeUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserImportJobCommand extends $Command<DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DescribeUserImportJobCommandInput;
    constructor(input: DescribeUserImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserImportJobCommandInput, DescribeUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
