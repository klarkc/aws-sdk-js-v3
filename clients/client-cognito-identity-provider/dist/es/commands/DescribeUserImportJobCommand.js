import { __extends } from "tslib";
import { DescribeUserImportJobRequest, DescribeUserImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserImportJobCommand, serializeAws_json1_1DescribeUserImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeUserImportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeUserImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserImportJobCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeUserImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "DescribeUserImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserImportJobCommand(input, context);
    };
    DescribeUserImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserImportJobCommand(output, context);
    };
    return DescribeUserImportJobCommand;
}($Command));
export { DescribeUserImportJobCommand };
//# sourceMappingURL=DescribeUserImportJobCommand.js.map