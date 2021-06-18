import { __extends } from "tslib";
import { CreateVirtualGatewayInput, CreateVirtualGatewayOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualGatewayCommand,
  serializeAws_restJson1CreateVirtualGatewayCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual gateway.</p>
 *          <p>A virtual gateway allows resources outside your mesh to communicate to resources that
 *          are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS
 *          task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which
 *          represents an Envoy running with an application, a virtual gateway represents Envoy
 *          deployed by itself.</p>
 *          <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVirtualGatewayCommand = /** @class */ (function (_super) {
  __extends(CreateVirtualGatewayCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVirtualGatewayCommand(input) {
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
  CreateVirtualGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateVirtualGatewayCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualGatewayOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVirtualGatewayCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVirtualGatewayCommand(input, context);
  };
  CreateVirtualGatewayCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVirtualGatewayCommand(output, context);
  };
  return CreateVirtualGatewayCommand;
})($Command);
export { CreateVirtualGatewayCommand };
//# sourceMappingURL=CreateVirtualGatewayCommand.js.map
