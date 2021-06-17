import { __extends } from "tslib";
import { Connection, CreateConnectionRequest } from "../models/models_0";
import { deserializeAws_json1_1CreateConnectionCommand, serializeAws_json1_1CreateConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a connection between a customer network and a specific AWS Direct Connect location.</p>
 *
 *          <p>A connection links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic
 *       cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router.</p>
 *          <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p>
 *          <p>You can automatically add the new connection to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new connection is allocated on the
 *       same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
 *       the request fails and no connection is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectionCommand = /** @class */ (function (_super) {
    __extends(CreateConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConnectionCommand(input) {
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
    CreateConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Connection.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateConnectionCommand(input, context);
    };
    CreateConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateConnectionCommand(output, context);
    };
    return CreateConnectionCommand;
}($Command));
export { CreateConnectionCommand };
//# sourceMappingURL=CreateConnectionCommand.js.map