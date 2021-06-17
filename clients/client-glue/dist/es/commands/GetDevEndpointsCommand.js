import { __extends } from "tslib";
import { GetDevEndpointsRequest, GetDevEndpointsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDevEndpointsCommand, serializeAws_json1_1GetDevEndpointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all the development endpoints in this AWS account.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address
 *       and the public IP address field is not populated. When you create a non-VPC development
 *       endpoint, AWS Glue returns only a public IP address.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevEndpointsCommand = /** @class */ (function (_super) {
    __extends(GetDevEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevEndpointsCommand(input) {
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
    GetDevEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetDevEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDevEndpointsCommand(input, context);
    };
    GetDevEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDevEndpointsCommand(output, context);
    };
    return GetDevEndpointsCommand;
}($Command));
export { GetDevEndpointsCommand };
//# sourceMappingURL=GetDevEndpointsCommand.js.map