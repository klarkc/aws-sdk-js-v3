import { __extends } from "tslib";
import { GetClassifiersRequest, GetClassifiersResponse } from "../models/models_0";
import { deserializeAws_json1_1GetClassifiersCommand, serializeAws_json1_1GetClassifiersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all classifier objects in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifiersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifiersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetClassifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassifiersCommandInput} for command's `input` shape.
 * @see {@link GetClassifiersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetClassifiersCommand = /** @class */ (function (_super) {
    __extends(GetClassifiersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetClassifiersCommand(input) {
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
    GetClassifiersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetClassifiersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetClassifiersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetClassifiersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetClassifiersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetClassifiersCommand(input, context);
    };
    GetClassifiersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetClassifiersCommand(output, context);
    };
    return GetClassifiersCommand;
}($Command));
export { GetClassifiersCommand };
//# sourceMappingURL=GetClassifiersCommand.js.map