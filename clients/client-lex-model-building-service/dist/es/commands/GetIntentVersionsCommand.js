import { __extends } from "tslib";
import { GetIntentVersionsRequest, GetIntentVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetIntentVersionsCommand, serializeAws_restJson1GetIntentVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about all of the versions of an intent.</p>
 *          <p>The <code>GetIntentVersions</code> operation returns an
 *         <code>IntentMetadata</code> object for each version of an intent. For
 *       example, if an intent has three numbered versions, the
 *         <code>GetIntentVersions</code> operation returns four
 *         <code>IntentMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetIntentVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetIntentVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentVersionsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetIntentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntentVersionsCommandInput} for command's `input` shape.
 * @see {@link GetIntentVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIntentVersionsCommand = /** @class */ (function (_super) {
    __extends(GetIntentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIntentVersionsCommand(input) {
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
    GetIntentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetIntentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIntentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIntentVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIntentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIntentVersionsCommand(input, context);
    };
    GetIntentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIntentVersionsCommand(output, context);
    };
    return GetIntentVersionsCommand;
}($Command));
export { GetIntentVersionsCommand };
//# sourceMappingURL=GetIntentVersionsCommand.js.map