import { __extends } from "tslib";
import { CreateBGPPeerRequest, CreateBGPPeerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateBGPPeerCommand, serializeAws_json1_1CreateBGPPeerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a BGP peer on the specified virtual interface.</p>
 *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access AWS resources that also use that address family.</p>
 *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
 *       be in the same address family as an existing BGP peer on the virtual interface.</p>
 *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateBGPPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBGPPeerCommandInput} for command's `input` shape.
 * @see {@link CreateBGPPeerCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBGPPeerCommand = /** @class */ (function (_super) {
    __extends(CreateBGPPeerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBGPPeerCommand(input) {
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
    CreateBGPPeerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateBGPPeerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBGPPeerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBGPPeerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBGPPeerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBGPPeerCommand(input, context);
    };
    CreateBGPPeerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBGPPeerCommand(output, context);
    };
    return CreateBGPPeerCommand;
}($Command));
export { CreateBGPPeerCommand };
//# sourceMappingURL=CreateBGPPeerCommand.js.map