import { __extends } from "tslib";
import { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualServiceCommand,
  serializeAws_restJson1CreateVirtualServiceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual service within a service mesh.</p>
 *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
 *          directly or indirectly by means of a virtual router. Dependent services call your virtual
 *          service by its <code>virtualServiceName</code>, and those requests are routed to the
 *          virtual node or virtual router that is specified as the provider for the virtual
 *          service.</p>
 *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVirtualServiceCommand = /** @class */ (function (_super) {
  __extends(CreateVirtualServiceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateVirtualServiceCommand(input) {
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
  CreateVirtualServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateVirtualServiceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualServiceOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateVirtualServiceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateVirtualServiceCommand(input, context);
  };
  CreateVirtualServiceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateVirtualServiceCommand(output, context);
  };
  return CreateVirtualServiceCommand;
})($Command);
export { CreateVirtualServiceCommand };
//# sourceMappingURL=CreateVirtualServiceCommand.js.map
