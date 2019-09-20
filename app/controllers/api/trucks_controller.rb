module Api
	class TrucksController < ApplicationController

		def index
			trucks = Truck.order('created_at DESC')
			render json: {status: 'Successfully loaded Trucks',data:trucks}, status: :ok
		end

		def show
			truck = Truck.find(params[:id])
			render json: {satus: 'Successfully loaded Truck',data:truck}, status: :ok
		end

		def create
			truck = Truck.new(truck_params)
			if truck.save
				render json: {status: 'Successfully saved Truck',data:truck}, status: :ok
			else
				render json: {status: 'ERROR.. Truck not saved',data:truck.errors}, status: :unprocessable_entity
			end
		end

		def update
    		truck = Truck.find(params[:id])
    		if truck.update(truck_params)
      			render json: {status: 'Successfully updated Truck', data:truck}, status: :ok
    		else
      			render json: {status: 'ERROR.. Truck not Updated', data:truck.errors}, status: :unprocessable_entity
    		end      
  		end

  		def destroy
    		truck = Truck.find(params[:id])
    		truck.destroy
    		render json: {status: 'Successfully destroyed Truck', data:truck}, status: :ok
  		end

		private

		def truck_params
			params.permit(:name, :address, :latitude, :longitude)
		end

	end
end