import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import { DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput } from "./commands/DeleteThingShadowCommand";
import { GetThingShadowCommandInput, GetThingShadowCommandOutput } from "./commands/GetThingShadowCommand";
import { ListNamedShadowsForThingCommandInput, ListNamedShadowsForThingCommandOutput } from "./commands/ListNamedShadowsForThingCommand";
import { PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import { UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput } from "./commands/UpdateThingShadowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS IoT</fullname>
 *          <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors,
 *       actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and
 *       things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a
 *       persistent representation of your things and their state in the AWS cloud.</p>
 *          <p>Find the endpoint address for actions in the AWS IoT data plane by running this CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">AWS Signature Version 4</a>
 *       to sign requests is: <i>iotdevicegateway</i>.</p>
 */
export declare class IoTDataPlane extends IoTDataPlaneClient {
    /**
     * <p>Deletes the shadow for the specified thing.</p>
     *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the AWS IoT Developer Guide.</p>
     */
    deleteThingShadow(args: DeleteThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingShadowCommandOutput>;
    deleteThingShadow(args: DeleteThingShadowCommandInput, cb: (err: any, data?: DeleteThingShadowCommandOutput) => void): void;
    deleteThingShadow(args: DeleteThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThingShadowCommandOutput) => void): void;
    /**
     * <p>Gets the shadow for the specified thing.</p>
     *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
     *         AWS IoT Developer Guide.</p>
     */
    getThingShadow(args: GetThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<GetThingShadowCommandOutput>;
    getThingShadow(args: GetThingShadowCommandInput, cb: (err: any, data?: GetThingShadowCommandOutput) => void): void;
    getThingShadow(args: GetThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetThingShadowCommandOutput) => void): void;
    /**
     * <p>Lists the shadows for the specified thing.</p>
     */
    listNamedShadowsForThing(args: ListNamedShadowsForThingCommandInput, options?: __HttpHandlerOptions): Promise<ListNamedShadowsForThingCommandOutput>;
    listNamedShadowsForThing(args: ListNamedShadowsForThingCommandInput, cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void): void;
    listNamedShadowsForThing(args: ListNamedShadowsForThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNamedShadowsForThingCommandOutput) => void): void;
    /**
     * <p>Publishes state information.</p>
     *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the
     *        AWS IoT Developer Guide.</p>
     */
    publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
    publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
    publish(args: PublishCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishCommandOutput) => void): void;
    /**
     * <p>Updates the shadow for the specified thing.</p>
     *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
     *         AWS IoT Developer Guide.</p>
     */
    updateThingShadow(args: UpdateThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingShadowCommandOutput>;
    updateThingShadow(args: UpdateThingShadowCommandInput, cb: (err: any, data?: UpdateThingShadowCommandOutput) => void): void;
    updateThingShadow(args: UpdateThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThingShadowCommandOutput) => void): void;
}
