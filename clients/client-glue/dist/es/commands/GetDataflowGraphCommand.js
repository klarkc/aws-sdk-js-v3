import { __extends } from "tslib";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDataflowGraphCommand, serializeAws_json1_1GetDataflowGraphCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataflowGraphCommand = /** @class */ (function (_super) {
    __extends(GetDataflowGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataflowGraphCommand(input) {
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
    GetDataflowGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetDataflowGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataflowGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataflowGraphResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataflowGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDataflowGraphCommand(input, context);
    };
    GetDataflowGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDataflowGraphCommand(output, context);
    };
    return GetDataflowGraphCommand;
}($Command));
export { GetDataflowGraphCommand };
//# sourceMappingURL=GetDataflowGraphCommand.js.map