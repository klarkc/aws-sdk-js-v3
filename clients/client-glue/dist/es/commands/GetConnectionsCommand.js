import { __extends } from "tslib";
import { GetConnectionsRequest, GetConnectionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetConnectionsCommand, serializeAws_json1_1GetConnectionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetConnectionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetConnectionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectionsCommandInput} for command's `input` shape.
 * @see {@link GetConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectionsCommand = /** @class */ (function (_super) {
    __extends(GetConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConnectionsCommand(input) {
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
    GetConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetConnectionsCommand(input, context);
    };
    GetConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetConnectionsCommand(output, context);
    };
    return GetConnectionsCommand;
}($Command));
export { GetConnectionsCommand };
//# sourceMappingURL=GetConnectionsCommand.js.map