import { __extends } from "tslib";
import { BulkPublishRequest, BulkPublishResponse } from "../models/models_0";
import { deserializeAws_restJson1BulkPublishCommand, serializeAws_restJson1BulkPublishCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, BulkPublishCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, BulkPublishCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new BulkPublishCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BulkPublishCommandInput} for command's `input` shape.
 * @see {@link BulkPublishCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BulkPublishCommand = /** @class */ (function (_super) {
    __extends(BulkPublishCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BulkPublishCommand(input) {
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
    BulkPublishCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "BulkPublishCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BulkPublishRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BulkPublishResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BulkPublishCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BulkPublishCommand(input, context);
    };
    BulkPublishCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BulkPublishCommand(output, context);
    };
    return BulkPublishCommand;
}($Command));
export { BulkPublishCommand };
//# sourceMappingURL=BulkPublishCommand.js.map