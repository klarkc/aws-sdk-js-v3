import { __extends } from "tslib";
import { GetLFTagRequest, GetLFTagResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLFTagCommand, serializeAws_json1_1GetLFTagCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a tag definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLFTagCommandInput} for command's `input` shape.
 * @see {@link GetLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLFTagCommand = /** @class */ (function (_super) {
    __extends(GetLFTagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLFTagCommand(input) {
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
    GetLFTagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LakeFormationClient";
        var commandName = "GetLFTagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLFTagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLFTagResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLFTagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLFTagCommand(input, context);
    };
    GetLFTagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLFTagCommand(output, context);
    };
    return GetLFTagCommand;
}($Command));
export { GetLFTagCommand };
//# sourceMappingURL=GetLFTagCommand.js.map