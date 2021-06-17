import { __extends } from "tslib";
import { GetBulkPublishDetailsRequest, GetBulkPublishDetailsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBulkPublishDetailsCommand, serializeAws_restJson1GetBulkPublishDetailsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetBulkPublishDetailsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetBulkPublishDetailsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetBulkPublishDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBulkPublishDetailsCommandInput} for command's `input` shape.
 * @see {@link GetBulkPublishDetailsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBulkPublishDetailsCommand = /** @class */ (function (_super) {
    __extends(GetBulkPublishDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBulkPublishDetailsCommand(input) {
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
    GetBulkPublishDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "GetBulkPublishDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBulkPublishDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBulkPublishDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBulkPublishDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBulkPublishDetailsCommand(input, context);
    };
    GetBulkPublishDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBulkPublishDetailsCommand(output, context);
    };
    return GetBulkPublishDetailsCommand;
}($Command));
export { GetBulkPublishDetailsCommand };
//# sourceMappingURL=GetBulkPublishDetailsCommand.js.map