import { __extends } from "tslib";
import { PutStoredQueryRequest, PutStoredQueryResponse } from "../models/models_1";
import { deserializeAws_json1_1PutStoredQueryCommand, serializeAws_json1_1PutStoredQueryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single AWS account and a single AWS Region.
 * 			You can create upto 300 queries in a single AWS account and a single AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutStoredQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStoredQueryCommandInput} for command's `input` shape.
 * @see {@link PutStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutStoredQueryCommand = /** @class */ (function (_super) {
    __extends(PutStoredQueryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutStoredQueryCommand(input) {
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
    PutStoredQueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutStoredQueryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutStoredQueryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutStoredQueryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutStoredQueryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutStoredQueryCommand(input, context);
    };
    PutStoredQueryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutStoredQueryCommand(output, context);
    };
    return PutStoredQueryCommand;
}($Command));
export { PutStoredQueryCommand };
//# sourceMappingURL=PutStoredQueryCommand.js.map