import { __extends } from "tslib";
import { CreateRouteInput, CreateRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRouteCommand,
  serializeAws_restJson1CreateRouteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a route that is associated with a virtual router.</p>
 *          <p> You can route several different protocols and define a retry policy for a route.
 *          Traffic can be routed to one or more virtual nodes.</p>
 *          <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRouteCommand = /** @class */ (function (_super) {
  __extends(CreateRouteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRouteCommand(input) {
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
  CreateRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppMeshClient";
    var commandName = "CreateRouteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRouteOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRouteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateRouteCommand(input, context);
  };
  CreateRouteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateRouteCommand(output, context);
  };
  return CreateRouteCommand;
})($Command);
export { CreateRouteCommand };
//# sourceMappingURL=CreateRouteCommand.js.map
